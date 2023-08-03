import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Card from '@site/src/components/card';
import ScreenTime from '@site/src/components/profess/screenTime';
import WakeUpScreen from '@site/src/components/profess/wakeUpScreen';
import UseAppRanking from '@site/src/components/profess/usingAppRanking';
import WeekSelector from '@site/src/components/weekSelector';
import { PROFESSES } from '@site/static/constants/profess';
import { PROFESS_TYPE } from '@site/static/types/profess';
import Summary from '@site/src/components/profess/summary';
import Money from '@site/src/components/profess/money';

const ProfessPage = () => {
  const [currentIndex, setCurrentIndex] = useState(PROFESSES.length - 1);

  const onClickLeft = () => {
    setCurrentIndex((c) => c - 1);
  };
  const onClickRight = () => {
    setCurrentIndex((c) => c + 1);
  };

  return (
    <Layout
      title="주간 정산"
      description="주마다 핸드폰을 얼마나 썼는지, 목표한 바는 이루었는지 등을 기록하는 페이지입니다."
    >
      <main className={styles.root}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h1>주간 정산 🙈</h1>
            <WeekSelector
              currentWeek={`${PROFESSES[currentIndex].date.month}월 ${PROFESSES[currentIndex].date.week}주차`}
              onClickLeft={onClickLeft}
              onClickRight={onClickRight}
              rightDisabled={currentIndex === PROFESSES.length - 1}
              leftDisabled={currentIndex === 0}
            />
          </div>
          <div className={styles.cardContainer}>
            <Card
              title="스크린 타임"
              toggleDescription="한주간 휴대폰의 화면이 켜져있던 시간이에요"
            >
              <ScreenTime
                data={PROFESSES[currentIndex][PROFESS_TYPE.SCREEN_TIME]}
              />
            </Card>
            <Card
              title="앱 사용 순위"
              toggleDescription="한주간 가장 많이 시간을 소모한 앱 순위에요"
            >
              <UseAppRanking
                data={PROFESSES[currentIndex][PROFESS_TYPE.USING_APP_RANKING]}
              />
            </Card>
            <Card
              title="화면 깨우기"
              toggleDescription="한주간 휴대폰의 화면을 켠 횟수에요"
            >
              <WakeUpScreen
                data={PROFESSES[currentIndex][PROFESS_TYPE.WAKE_UP_APP]}
              />
            </Card>
            {PROFESS_TYPE.MONEY in PROFESSES[currentIndex] && (
              <Card
                title="소비 습관"
                toggleDescription="고치고 싶은 소비습관이에요"
              >
                <Money data={PROFESSES[currentIndex][PROFESS_TYPE.MONEY]} />
              </Card>
            )}
            <Card title="총평">
              <Summary data={PROFESSES[currentIndex][PROFESS_TYPE.SUMMARY]} />
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProfessPage;
