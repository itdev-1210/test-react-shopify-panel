import React, { Component } from 'react';
import GridContainer from '../components/GridContainer';
import GridItem from '../components/GridItem';
import CoolTabs from 'react-cool-tabs';
import CustomProgressBar from '../components/CustomProgressBar';

export default class TabLayout extends Component {

  render() {
    const style = {
      width: 'calc(100% - 200px)',
      paddingTop: '10rem',
      background: 'white'
    }

    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} lg={9}>
          <CoolTabs
            tabKey={'1'}
            style={style}
            activeTabStyle={{ background: 'white', color: 'orange' }}
            unActiveTabStyle={{ background: 'white', color: '#CCC' }}
            activeLeftTabBorderBottomStyle={{ background: 'orange', height: 2 }}
            activeRightTabBorderBottomStyle={{ background: 'orange', height: 2 }}
            tabsBorderBottomStyle={{ background: 'white', height: 2 }}
            leftContentStyle={{ background: 'white' }}
            rightContentStyle={{ background: 'white' }}
            leftTabTitle={'Left title'}
            rightTabTitle={'Right title'}
            leftContent={<CustomProgressBar />}
            rightContent={<CustomProgressBar />}
          />
        </GridItem>
      </GridContainer>
    );
  }
}