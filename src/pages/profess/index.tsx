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

const ProfessPage = () => {
  const [currentIndex, setCurrentIndex] = useState(PROFESSES.length - 1);

  const onClickLeft = () => {
    setCurrentIndex((c) => c - 1);
  };
  const onClickRight = () => {
    setCurrentIndex((c) => c + 1);
  };

  return (
    <Layout title="주간 정산" description="내 현황">
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
              toggleDescription="1주간 휴대폰의 화면이 켜져있던 시간이에요"
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
            <Card title="화면 깨우기">
              <WakeUpScreen
                data={PROFESSES[currentIndex][PROFESS_TYPE.WAKE_UP_APP]}
              />
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProfessPage;
