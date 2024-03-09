---
slug: git-command
title: 초보자를 위한 깃 명령어 모음(번역글)
authors: [hojun]
tags: [git]
---

깃(Git)은 정말 강력한 도구임에도 사람들은 깃의 다양한 기능을 쓰는걸 주저합니다. 협업단계에서 동료들이 `master` 브랜치를 `hard reset`한다던가 `force push`하는 사고를 왜 치는 걸 보며 이 내용을 알기 쉽고 직관적으로 이해할 수 있도록 시각화해야겟다는 생각을 했습니다.

아래 나오는 명령어들은 아주 기본적이고 자주 사용하는 것들입니다. 그리고 저 상태로 사용하기 보단 다양한 옵션이 많으니 알아보고 유용하게 사용하길 바랍니다. 그럼 시작하겠습니다.

![thumbnail](thumbnail.avif)

:::info 이 글은 번역글이에요.
Vercel의 개발자 Lynda Hale의 [가이드 문서](https://dev.to/lydiahallie/cs-visualized-useful-git-commands-37p1)를 번역한 글입니다.
:::

<!--truncate-->

## 병합(Merging)

여러 개의 브랜치를 가지고 작업하는것은 굉장히 유용합니다. 승인받지 않거나 충돌이 난 브랜치를 프로덕션 브랜치와 구분할 수도 있죠. 만약 작업물이 잘 되어서 승인을 받았다면, 그 브랜치는 프로덕션 브랜치로 합쳐지게 됩니다.

이 때, 기존 브랜치에 다른 브랜치를 병합시키는 명령어는 git merge입니다. merge하는 방식에는 두가지가 있는데요, 하나는 fast-forward이고 다른 하나는 no-fast-forward입니다. 생소한 용어라 차이가 모호하실텐데요, 아래 예시를 보며 이해해보겠습니다.

`master` 브랜치에 `dev`브랜치를 merge하는 상황을 가정해볼게요.

### Fast-forward (`-ff`)

`Fast-Forward Merge`는 현재 브랜치가 머지 대상이 되는 `dev` 브랜치와 비교했을 때 추가적인 커밋이 없을 때 이루어집니다. 이 옵션으로 머지가 진행되면 새로운 커밋이 생성되지 않고 머지 대상이 되는 커밋들을 붙히고 헤드가 최상단으로 옮겨갑니다.

![ff merge](https://res.cloudinary.com/practicaldev/image/fetch/s--cT4TSe48--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/894znjv4oo9agqiz4dql.gif)

성공적으로 `dev` 브랜치의 작업내용이 `master`브랜치로 옮겨왔습니다👍🏻 그렇다면 `no-fast-forward` merge는 뭘 의미하나요?

### No-fast-foward (`-no-ff`)

위의 예시처럼 추가작업내용이 없이 깔끔하게 머지되는 경우라면 좋겠지만 그렇지 않은 경우도 많습니다.

아래 그림을 보면 머지하는 시점에 `master`브랜치도 작업내용이 있어 커밋을 2개나 했고, dev브랜치도 마찬가지로 2개나 커밋이 추가되었네요. 이처럼 두 브랜치 간 차이가 생겼을 때 no-fast-forward merge를 실행합니다.

`no-fast-forward merge`를 하게되면 깃은 이전 브랜치들은 가만히 두고, 새로운 커밋을 만들어서 두 브랜치의 작업내용을 합한 뒤 `merge`합니다. 물론 여기서 만들어진 커밋은 `master`, `dev` 둘을 각각 바라보고 있겠죠?

![no-ff-merge](https://res.cloudinary.com/practicaldev/image/fetch/s--zRZ0x2Vc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/rf1o2b6eduboqwkigg3w.gif)

사실 별거 없습니다. `matser`브랜치는 동일하게 `dev`브랜치의 작업내용을 전부 병합하였습니다.

### 충돌(Conflict)

이렇게 깃으로 작업내용을 합치는게 쉽긴 한데, 또 항상 그렇지만은 않습니다. 두 커밋이 같은 파일의 같은 코드를 수정했을 때나 누군가가 삭제한 파일의 내용을 수정할 때 등이 문제가 되는데 이를 충돌(`Conflict`)라고 합니다.

이런 경우 깃은 어떤 부분이 맞는지 `merge`를 시도하는 개발자에게 역으로 묻습니다. 간단하게 두 브랜치가 README.md 파일의 같은 부분을 고치려고 했다 가정해봅시다.

![conflict](https://res.cloudinary.com/practicaldev/image/fetch/s--jXqGWUai--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/m3nxmp67mqof5sa3iik9.png)

만약 이 상황에서 `dev`브랜치를 `master`브랜치에 머지시키려고 했다면 충돌이 날거에요. 그러면 깃은 충돌난 부분을 특정해서 보여주고 개발자에게 Hello!가 맞는지 Hey!가 맞는지 되묻습니다. 직접 고쳐주기 전까진 `merge`할 수 없어요. 고친 후 다시 `commit`을 해서 바로잡았다면, 그때야 비로소 `merge`할 수 있습니다.

![conflict-merge](https://res.cloudinary.com/practicaldev/image/fetch/s--7lBksXwA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bcd5ajtoc0g5dxzmpfbq.gif)

충돌이 났지만 잘 해결해서 `merge`되었습니다. 이처럼 깃은 어떤 파일이 맞겠지 하고 지레짐작하지 않습니다.

---

## 리베이싱(Rebase)

위에서 우리는 `git merge`라는 명령어로 하나의 브랜치에서 다른 브랜치를 병합하는 방법을 배웠습니다. 하지만 이 방법만 있는게 아닙니다. git rebase라는 방법도 있습니다.

리배이스는 현재 브랜치의 커밋들을 복사합니다. 그리고 특정 브랜치의 최상단에 가져다 놓습니다.

![rebase](https://res.cloudinary.com/practicaldev/image/fetch/s--EIY4OOcE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/dwyukhq8yj2xliq4i50e.gif)

그림에 나오는 `git rebase master` 명령어로 `master`브랜치의 맨 위에 `dev`의 작업물들을 이어붙혔습니다!

일반 `merge` 명령어와 가장 큰 차이점은 어떤 파일은 보존하고 어떤 파일은 버릴지 생각하지 않는다는 점입니다. 항상 리베이싱할 브랜치에서는 가장 최신 커밋들을 적용시켜주기 때문에 `git history`를 한줄로 유지할 수 있습니다.

위의 예시에서는 `master`브랜치 위로의 `rebase`를 보여드렸는데요, 하지만 보통 이보다 더 큰 프로젝트에서는 이렇지 않습니다. 예시를 보면 `rebase` 명령어의 실행과 동시에 두개의 커밋 해시가 변경되는게 보이실겁니다. `git rebase`명령어로 복사된 커밋들에는 새로운 해시값이 생성되어 프로젝트의 history를 변경시키기 때문에 잘 사용하지 않습니다.

`rebase`는 현재 어떤 브랜치에서 작업중인데 머지하려고 보니 상위 브랜치에 누군가 이미 작업을 해놓았을 때 유용합니다. 이럴 때 `rebase`를 사용하면 지금까지의 작업물을 전부 최상위로 올려주기 때문에 충돌을 방지할 수 있습니다. 😄

### 인터렉티브 리배이스(Interactive Rebase)

커밋들을 리베이스하기 전에 이 커밋들에 어떤 조치들을 해줄 수 있습니다. 이를 인터렉티브 리배이스(`Interactive Rebase`)라고 부릅니다. 합치기 전에 메시지를 변경한다던가, 필요없는 커밋을 날린다던가 하는 기능들이 있기 때문에 꽤나 유용합니다.

인터렉티브 리베이스에는 6가지 동작이 존재합니다.

- `reword`: 커밋 메시지를 변경합니다.
- `edit`: 커밋 내용을 수정합니다.
- `squash`: 커밋들을 하나로 합칩니다.
- `fixup`:커밋들을 하나로 합치되 커밋 메시지는 보존하지 않습니다.
- `exec`: Run a command on each commit we want to rebase (?)
- `drop`: 커밋을 삭제합니다.

먼저, 필요없는 커밋을 삭제하는 모습입니다. 리베이스 후 커밋들 중 삭제하고 싶은 커밋이 있다면 간단히 `drop`이라고 바꿔써주면 됩니다.

![interactive-rebase1](https://res.cloudinary.com/practicaldev/image/fetch/s--P6jr7igd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/msofpv7k6rcmpaaefscm.gif)

아니면 두 커밋을 하나로 합치고 싶다면 `squash`라고 적어주면 됩니다.

![squash merge](https://res.cloudinary.com/practicaldev/image/fetch/s--VSQt4g1V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bc1r460xx1i0blu0lnnm.gif)

이처럼 인터렉티브 리베이스는 리배이스 대상이 되는 커밋들을 수정, 삭제 등 제어하기 위한 도구입니다.

---

## 리셋(Resetting)

종종 우리는 원치않는 `commit`을 날리곤 합니다. 그냥 로그를 남겨놨다던가 코멘트를 남겨놓는 수준이 아닌 버그를 야기할 수 도 있는 `commit`이나 프로덕션에 날리는 `commit`들도 있을 수 있죠. 이런 경우 우리는 `git reset`을 통해 되돌려야합니다.

`git reset`명령어는 변경된 내용을 제거하고 `HEAD`가 어디를 가리킬지 정합니다.

### 소프트 리셋(Soft reset)

소프트 리셋은 커밋 내용의 변화 없이 그저 HEAD를 특정 커밋으로 위치시킵니다.

아래 예시를 볼게요. 작업한 내용 중 그저 style.css 파일을 변경한 `9e78i` `commit`과 index.js를 변경한 `035cc` `commit` 이필요가 없어졌습니다. 하지만 style.css와 index.js를 새롭게 추가한 시점의 `commit`인 `ec5be`는 필요한 상황입니다. 이럴 때 `soft reset`을 사용하면 좋습니다.

![reset](https://res.cloudinary.com/practicaldev/image/fetch/s---GveiZe---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/je5240aqa5uw9d8j3ibb.gif)

소프트 리셋을 하고 `git status`를 보면 이전에 작성했던 `commit`들에 접근이 가능한 것을 볼 수 있습니다. 이 커밋들을 자유롭게 수정하고 다시 `commit`하고 싶을 때 `commit`하면 되는것입니다.

### 하드 리셋(Hard reset)

`soft reset`과 다르게, 특정 `commit`부터의 변경사항은 아예 없애버리고 싶을 수 있습니다. 더 이상 볼 필요가 없는 파일인 것이죠. `hard reset`은 특정 `commit` 상태로 돌아갑니다.

![soft-reset](https://res.cloudinary.com/practicaldev/image/fetch/s--GqjwnYkF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hlh0kowt3hov1xhcku38.gif)

위 예제에서 깃은 커밋`9e78i` 와 `035cc` 를 버리고 그 이전 상태로 되돌아간 것을 볼 수 있습니다.

---

### 커밋 되돌리기(Reverting)

변경사항을 되돌리는 방법 중에는 `git revert`도 있습니다. 특정 커밋을 reverting하면 그 커밋에서 변경된 내용이 삭제된 새로운 커밋을 만들어냅니다.

커밋 `ec5be` 가 `index.js` 파일을 수정했다고 해봅시다. 생각해보니 이 부분은 수정하면 안되는 부분이었어요. 그럼  `ec5be` 를 되돌려야겠죠?

![revert](https://res.cloudinary.com/practicaldev/image/fetch/s--eckmvr2M--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/3kkd2ahn41zixs12xgpf.gif)

`git revert ec5be` 명령어로 커밋 `ec5be`에서 수정한 index.js가 되돌려(undo)진 상태가 담긴 커밋`9e78i`가 만들어졌습니다. 이처럼 revert는 reset과 다르게 특정 커밋에 대해 적용할 수 있기 때문에 branch history에 영향을 주고 싶지 않을 때 사용합니다.

---

## 체리픽(Cherry-picking)

특정 브랜치의 커밋을 우리 브랜치로 가져오고 싶다면 체리픽(cherry-pick)을 사용하면 됩니다. 체리픽을 사용하면 해당 커밋과 똑같은 커밋을 내 브랜치에 색성합니다.

아래 예시에서 dev 브랜치의 커밋 76d12는 index.js를 수정한 커밋입니다. 그리고 이 커밋을 master 브랜치로 가져가고 싶은겁니다. 다른 커밋은 필요 없고요. 딱 저 커밋만 가져가고 싶은 상태에요

![cherry-pick](https://res.cloudinary.com/practicaldev/image/fetch/s--9vWP_K4S--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/2dkjx4yeaal10xyvj29v.gif)

`git cherry-pick 76d12`라는 명령어로 성공적으로 커밋을 복사해올 수 있습니다.

---

## 리모트 내려받기(Fetch)

현재 로컬 브랜치가 있고, 이와 연결된 리모트 브랜치가 있다고 가정해봅시다. 그리고 로컬 브랜치엔 리모트 브랜치에 올라와있는 내용이 없는 상태에요. 아마 다른 사람이 이 브랜치에 merge같은 동작을 했기 때문이겠죠? 핫픽스를 고치기 위해 해당 브랜치에 즉각 push를 했을수도 있고요.

이렇게 변경된 내용을 git fetch 명령어를 통해 가져올 수 있습니다. fetch 명렁어는 단순히 다운로드만 하는 과정입니다.

![remote fetching](https://res.cloudinary.com/practicaldev/image/fetch/s--38PuARw2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bulx1voegfji4vwgndh4.gif)

리모트에만 있던 변경사항이 로컬 브랜치로 옮겨온 것을 알 수 있습니다. 그저 다운로드만 한 것이기 때문에 여기서 Head는 가만히 있다는 사실을 기억해주세요

---

## 내려받아 합치기(Pull)

리모트의 변경사항을 로컬로 가져오는 명령어는 또 있습니다. git pull을 하면 됩니다. 이 명령어가 왜 좋냐면, git fetch와 git merge를 합쳐놓은 명령어이기 때문입니다. 먼저 리모트의 변경사항을 다운받고(fetch) 이 변경사항들을 로컬브랜치에 합쳐(merge)줍니다

![pull](https://res.cloudinary.com/practicaldev/image/fetch/s---X5AXldj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/zifpnl1h6a4tk4qdc9sy.gif)

동작을 보시면 변경사항이 합쳐지고 head까지 옮겨간 것을 볼 수 있습니다.

---

## 기록보기(Reflog)

대부분의 개발자는 사람인지라 실수를 합니다. 그리고 이 실수를 해결하고자 깃 레포를 후벼파는 일도 비일비재합니다.

그런 경우를 위해 `git reflog`는 지금까지 입력되었던 커맨드의 기록을 볼 때 유용합니다. merge, reset, revert와같은 명령어는 물론 이를 대체하는 명령어의 기록까지 전부 보여줍니다.

![reflog](https://res.cloudinary.com/practicaldev/image/fetch/s--MMUdOS0P--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1aqek1py1knwl926ele7.gif)

그래서 만약 실수를 했을 때에도 git reflog명령어로 나온 결과들을 복기해서 해당 커밋으로 헤드를 리셋시키는 방식으로 되돌아갈 수 있습니다.

가령 위 예시에서 merge를 하고싶지 않았는데 해버렸다고 가정해봅시다. merge가 HEAD@{0}에서 이루어졌으니 우리는 그 바로 이전인 HEAD@{1}으로 돌아가야겠네요. HEAD@{1} 으로 돌아갈 수 있도록 `git reset HEAD@{1`명령어를 실행해봅니다.

![log](https://res.cloudinary.com/practicaldev/image/fetch/s--A1UMM2AH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9z9rhtbw7mrigp0miijz.gif)

그리고 다시 reflog로 로그를 찍어보면, HEAD@{0}에서 merge되었던 기록은 사라지고, reset한 기록만 남아있게 됩니다.

---

### 마치며

매번 쓰던 것만 쓰기도 하고, git 도구들이 워낙 GUI로 잘 나오는지라 모를 수도 있어요.
그래도 어떤 원리로 동작하고, 어떤 경우에 사용하는지는 알고 써야 하니까 꼭 알아두도록 합시다!
