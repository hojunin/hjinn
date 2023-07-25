---
slug: sitemap
title: SEO 0) 대규모 사이트맵 생성 자동화, 직접 구현해보자
authors: [hojun]
tags: [seo, sitemap]
---

사이트맵(sitemap)은 웹사이트 내 접근 가능한 모든 페이지 목록을 말합니다. 이 글에서는 사이트맵을 생성하는 방법과 주의사항, 특히 대규모 사이트맵 생성 등을 알아볼거에요.

:::info

[큰 사이트맵 또는 여러 개의 사이트맵 관리하기 | Google 검색 센터 | 문서 | Google Developers](https://developers.google.com/search/docs/advanced/sitemaps/large-sitemaps?hl=ko)

:::

<!--truncate-->

## 목적

보통의 웹서비스에서는 SEO를 위해 사이트맵을 생성하고 정적파일로 제공하고, 이를 구글 서치 콘솔이나 네이버 서치 어드바이져같은 검색엔진 어드민에 제출합니다. 사이트맵이 있다면 일반적인 크롤링 과정에서 발견되지 않는 웹사이트도 크롤링되어 색인될 수 있게 해줘요.

생성할 때 중요한 점은 접근 가능한 모든 페이지를 전부 넣어주는게 중요하고, 사용자가 계속 컨텐츠를 생산해내서 사이트맵에 추가가 필요한 경우라면 사이트맵을 계속 갱신해주는게 필요합니다. 반대로 없는 콘텐츠나 포함될 필요가 없는 컨텐츠는 제거해줘야해요.

## 인덱싱

컨텐츠가 수백개나 수천개 정도라면 문제 없지만, 이미 몇만개가 넘어갔거나 성장세 때문에 접근 가능한 페이지가 많아졌다면 인덱싱을 고려해야해요. 그 이유는 사이트맵은 생성 규칙이 있기 때문인데요, 하나의 사이트맵 파일 당 크기는 50mb를 넘지 못하고, URL이 5만줄을 넘지 못합니다.

즉, 사이트에 컨텐츠가 수십만개가 될 정도로 많은 경우 이를 감당할 수 없다는 뜻이에요. 이 때 사용하는게 인덱스의 인덱스, 목차의 목차입니다. root sitemap에 url-set을 넣는게 아니라 다른 xml을 선언해주는거에요. 마치 사이트맵들이 하나의 모듈처럼 존재하고, root sitemap이 전부 가져다 쓰는거라고 볼 수 있죠.

아래 사이트맵은 최상위 사이트맵(root sitemap)입니다. 검색엔진이 가장 먼저 확인하는 문서죠. 보통 [hojunin.com/sitemap.xml](http://hojunin.com/sitemap.xml)로 접근하는 문서 같은거에요.

```jsx
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<sitemap>
		<loc>http://hojunin.com/sitemap/default.xml</loc>
		<lastmod>2023-01-23</lastmod>
	</sitemap>
	<sitemap>
		<loc>http://hojunin.com/sitemap/feed.xml</loc>
		<lastmod>2022-01-23</lastmod>
	</sitemap>
	<sitemap>
		<loc>http://hojunin.com/sitemap/post.xml</loc>
		<lastmod>2022-01-23</lastmod>
	</sitemap>
</sitemapindex>
```

이런식으로 최상위 사이트맵을 만들고, 하위 사이트맵들을 생성하면 됩니다.

:::tip 권고사항

생성 제한 조건인 **5만개**씩 꽉꽉 채우기보단 **2.5만개**씩만 적당히 만드는게 유리합니다. 그럼 기본 사이트맵 생성 로직을 소개하고, 더 나아가 인덱스 사이트맵을 생성해보도록 할게요.

:::

## 기본 사이트맵 자동생성

가장 간단한 기본 구조입니다. [사이트맵 공식문서](https://www.sitemaps.org/protocol.html) 에서 자세한 내용을 확인해주세요. **urlset** 태그 안에 **url** 태그들을 생성해서 넣어줄거에요.

```jsx
<?xml version="1.0"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

</urlset>
```

사이트에 존재하는 모든 페이지 url을 손수 넣어줄 수도 있지만, 시간도 오래걸리고 생성이나 삭제되는 컨텐츠를 모두 컨트롤하기는 불가능합니다. 그리고 보통 5만개 넘는 페이지가 존재하려면 사용자 생성 컨텐츠가 있을 수 밖에 없어요. 각자 사용하는 CMS나 컨텐츠 서버에서 사이트맵으로 만들 데이터를 가져온 다음 string으로 생성합니다.

아래 보이는 코드는 서버에 모든 게시글의 slug 데이터를 가져와 **url** 태그를 만듭니다.

```jsx
const slugs = await axios.get('https://blog-contents.com/all-post');

const postUrls = slugs.map(
  ({ slug }) =>
    `<url>
        <loc>
          ${`[https://www.hojunin.com](https://www.hojunin.com/typeguard)/${slug}`}
        </loc>
        <changefreq>
        daily
        </changefreq>
        <lastmod>
          ${today}
        </lastmod>
      </url>`,
);
```

이제 기본 템플릿을 만들고, 아래에 만든 사이트맵 조각들을 String 클래스의 join 메소드로 붙혀넣습니다.

```jsx
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    <url>
    <url>
      <loc>https://[hojunin.com](http://hojunin.com/sitemap.xml)/</loc>
    </url>
      <loc>https://[hojunin.com](http://hojunin.com/sitemap.xml)/me</loc>
    </url>
    <url>
      <loc>https://[hojunin.com](http://hojunin.com/sitemap.xml)/about</loc>
    </url>
    
    ${postUrls.join('\n')}</urlset>`.replace(/\n|\t/g, ' ');
```

이제 다 만들었습니다. 마무리로 실제 xml 파일을 만들어야합니다. node 런타임에서 제공하는 fs 모듈로 파일을 생성합니다.

```jsx
const fs = require('fs');

// ... 중략

await fs.promises.writeFile('./sitemap.xml', sitemap, { encoding: 'utf-8' });
```

위 코드들을 조합하면 sitemap.xml 파일이 생성되고, 각 프레임워크에 맞게 루트에서 static 파일로 서빙하면 완성입니다.

## 인덱스 사이트맵 생성 로직

인덱스 사이트맵은 일단 root 사이트맵이 필요합니다. 위에서 소개했던 예시 그대로 가져와볼게요. 기본 구조는 간단합니다. 컨텐츠 사이트맵과 컨텐츠 이외의 사이트맵으로 구분하는거에요.

```jsx
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<sitemap>
		# 컨텐츠 이외에 사이트 기본 사이트맵
		<loc>http://hojunin.com/sitemap/default.xml</loc>
		<lastmod>2023-01-23</lastmod>
	</sitemap>
	<sitemap>
		# 컨텐츠 사이트맵 1
		<loc>http://hojunin.com/sitemap/feed.xml</loc>
		<lastmod>2022-01-23</lastmod>
	</sitemap>
	<sitemap>
		# 컨텐츠 사이트맵 2
		<loc>http://hojunin.com/sitemap/post.xml</loc>
		<lastmod>2022-01-23</lastmod>
	</sitemap>
	...
	...
</sitemapindex>
```

## 컨텐츠 사이트맵 만들기

root 사이트맵과 default 사이트맵은 복붙으로 만들어도 금방 만듭니다. 애초에 사이트 크기가 바다같이 크지 않는 이상 몇십개 수준이니까요.하지만 새로운 캠페인 페이지나 기능이 추가될 때마다 사이트맵을 만들기 귀찮을 수 있으니 파일구조로 기본 사이트맵을 생성 자동화하는 것은 추천드립니다.

여기서 문제가 되는건 컨텐츠 사이트맵입니다.

:::danger 가령 다음과 같은 상황에 놓여있다고 가정해봅시다.

- 블로그에 게시글이 27만개 있습니다.
- 게시글 페이지 하나는 게시글 종류와 아이디로 구분됩니다. (ex. hojunin.com/post/”type”/”id”)
- 블로그에 피드가 11만개 있습니다.
- 피드 하나는 날짜와 아이디로 구분됩니다. (ex. hojunin.com/feed/”date”/”id”)

:::

이런 상황에서 사이트맵을 만든다면, 27만개 게시글을 전부 하나의 파일에 넣는건 애초에 사이트맵 생성규칙을 위반하기 때문에 안되고, 관리도 어렵습니다. 타입이나 날짜 단위로 분류한다고 해도, 특정 타입이나 날짜에 생성된 컨텐츠가 비정상적으로 많을 수도 있습니다.

저도 실제 이런 문제에 직면했었어요. 그리고 다음과 같이 해결해보기로 했습니다.

아래 로직은 최종 실행 모듈이에요.

```jsx
/**
 * 여러 게시글 사이트맵을 생성하는 모듈
 */
const createPostSiteMap = async () => {
  const postDataByChunk = [];
  const postData = await fetchPostsId(); // 게시글 정보를 불러옵니다

  postData.forEach((typeAndId) => {
    const { type, id } = typeAndId;

    chunkByLimit(id, CHUNK_LIMIT) //25,000개 단위로 자르고,
      .forEach((array) => postDataByChunk.push(createPostMap(type, array))); // 사이트맵을 만들어 담습니다.
  });

  Promise.all(postDataByChunk.map(generatePostSitemap)); // 만든 사이트맵을 xml 파일로 만들어냅니다.
};
```

이제 이 로직에서 쓰인 모듈을 하나하나 확인해볼게요.

### 기본 사이트맵 템플릿

일단 기본 사이트맵 템플릿을 만들어주고요,

```jsx
const sitemapDefault = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
   
`;
```

### 25,000개로 자르기

너무 많은 데이터를 잘라주기 위해 하나의 사이트맵에 포함될 수 있는 url 갯수를 25,000개로 제한하는 모듈을 만듭니다.

```jsx
const CHUNK_LIMIT = 25000
...
/**
 * 사이트맵 효율을 위해 정해진 limit length만큼 잘라서 two-depth array로 반환합니다.
 */
const chunkByLimit = (array, limit) => {
  const chunkUnitCount = Math.floor(array.length / limit) + 1
  const result = []

  for(let i = 0; i < chunkUnitCount; i++){
    if(i === chunkUnitCount-1){
      result.push(array.slice(limit*i, ))
      continue
    }
    result.push(array.slice(limit*i, limit*(i+1) -1))
  }

  return result
}
```

### 날짜 갱신하기

url 태그에는 “YYYY-MM-DD” 형태인 lastmod 태그도 포함시켜야하므로, 다음과 같이 현재 날짜를 포매팅해서 리턴하는 모듈도 추가합니다.

```jsx
const enhanceDateFormat = (d) => {
  const dateToString = String(d);
  if (dateToString.length === 1) {
    return '0' + dateToString;
  }
  return dateToString;
};

const today = new Date();
// 아래 todayWithFormatDate 값을 가져다 쓸거에요.
const todayWithFormatDate = `${today.getFullYear()}-${enhanceDateFormat(
  today.getMonth() + 1,
)}-${enhanceDateFormat(today.getDate().toLocaleString())}`;
```

### API로 게시글 정보 가져오기

그 다음 블로그 게시글 리스트를 가져오는 API를 호출하는 모듈을 만들어요.

```jsx
const fetchPostsId = async () => {
  return fetch('https://content.io/all-posts')
    .then((res) => res.json())
    .then((data) => data.ids);
};

// 데이터는 다음과 같은 형태로 받는다고 가정해볼게요.
// {
//  type: "seo"
//  ids: [123,234,543,234,123432,2314,....]
// }
```

### 사이트맵 내용 채우기

게시글 데이터로 사이트맵 컨텐츠를 생성합니다. lastmod엔 오늘 날짜를 포매팅해서 넣어요.

```jsx
const postMap = (type, ids) => {
  return ids.map(
    (id) =>
      `<url>
			<loc>${`https://[hojunin.com](http://hojunin.com/sitemap.xml)/post/${type}/${id}`}</loc>
			<lastmod>${todayWithFormatDate}</lastmod>
		</url> `,
  );
};
```

### XML로 생성해내기

아래 모듈은 생성된 사이트맵을 fs 모듈로 실제 xml 파일로 만들어내는 모듈입니다.

```jsx
const generatePostSitemapXML = async (sitemapByString, index) => {
  const sitemap = `${sitemapDefault}
    ${sitemapByString.join('\n')}</urlset>`.replace(/\n|\t|,/g, ' ');
  await fs.promises.writeFile(`./sitemap/post${index + 1}.xml`, sitemap, {
    encoding: 'utf-8',
  });
};
```

## 기존 사이트맵 업데이트하기

lastmod는 한번 만든다고 끝이 아니에요. 계속 갱신해줘야 합니다. 특히 게시글이 생성되거나 삭제되었을 때 사이트맵을 갱신하게 되는데, 그 때마다 날짜 데이터 또한 업데이트 해줘야해요. 컨텐츠 사이트맵은 매일 재생성되어 기존 파일을 override하니 lastmod가 최신으로 유지되는데, default 사이트맵 혹은 더 분리한 사이트맵들이 있다면 이것들도 자동으로 업데이트 해줘야겠죠?

```jsx
const fs = require("fs")
const pathModule = require('path')

const DEFAULT_MAP_LIST = ["default", "dashboard", "etc", ...]

/**
 * path 모듈로 사이트맵 폴더 경로를 생성하여 반환합니다.
 */
const createPath = (pathName) =>  pathModule.resolve(__dirname,`${pathName}.xml`)

/**
 * 특정 사이트맵을 읽고 lastMod 값을 오늘날짜로 치환하여 리턴합니다.
 * todayWithFormatDate는 YYYY-MM-DD 형태의 날짜입니다.
 */
const updateLastMod = (path) => fs.readFileSync(path, {encoding:"utf-8"}).replace(/\d{4}-\d{2}-\d{0,2}/g,todayWithFormatDate)

/**
 * 생성된 사이트맵을 특정 경로에 생성합니다.
 */
const writeSiteMap = async (path, map) => {
  const rightPath = path ? `./sitemap/${path}.xml` : './sitemap.xml'
  await fs.promises.writeFile(rightPath, map, {
    encoding: 'utf-8',
  })
 }

// 최종 실행모듈입니다. 사이트맵을 업데이트합니다.
const updateSitemap = async () => {
    const updatedSitemaps = DEFAULT_MAP_LIST // 기본 사이트맵 path 리스트에서
    .map(createPath) // path모듈로 경로를 생성하고
    .map(updateLastMod) // lastMod 태그를 오늘 날자로 갱신한 다음
    .map((updatedSitemap, index) => // fs 모듈로 사이트맵을 생성합니다.
			writeSiteMap(DEFAULT_MAP_LIST[index], updatedSitemap))

    Promise.all(updatedSitemaps) // 라는 Promise 배열을 병렬로 실행합니다.
   }

updateSitemap()
```

## 지금도 좋지만, Github Actions로 조금 더 자동화

물론 이렇게 여러 모듈을 만들어서 동시에 실행하는 스크립트로 만들어둔 다음, 매일 꼬박꼬박 실행하면 되지만, 휴가로 자리를 비운 날이나 제가 퇴사하게되면 이 모듈은 버려지게 되고 사이트의 SEO 메트릭은 곤두박질칠거에요.

이런 일을 방지하기 위해 github actions를 활용해서 사이트맵을 매일 자동으로 생성하고 커밋하는 봇을 만들어봅시다. 저는 출근하고 커피한잔 한 다음 시간인 오전 11시를 선택했답니다.

```jsx
name: 사이트맵 갱신하는 자동화 봇

on:
  schedule:
    - cron: '0 2 * * *' // 매일 UTC 기준 2시(한국시간 기준 오전 11시)

jobs:
  cron:
    runs-on: ubuntu-latest // 우분투 리눅스에서 돌아갑니다.
    steps:
      - uses: actions/checkout@v3 // 코드를 가져와요.
      - uses: actions/setup-node@v3
        with:
          node-version: 18.12.0 // fetch 모듈은 node 18버전 이상에서만 지원하므로.
      - name: update sitemap
        run: |
          git config --global user.email "dlsghwns@naver.com" // 커밋할 사람~
          git config --global user.name "hojunin"
          git checkout develop
          git pull origin develop
          yarn generatesitemap // package.json에 미리 스크립트로 등록해둡니다.
          git add .
          git commit -m "사이트맵 갱신"
          git push
```

이렇게 매일 오전 11시에 사이트맵을 갱신해서 commit을 생성하고, 배포 branch에 자동으로 push하게 봇을 만들면 제가 부재중이여도 사이트맵이 갱신될 수 있습니다. 제 깃허브 잔디가 채워지는 좋은 사이드 이펙트도 발생합니다 😄
