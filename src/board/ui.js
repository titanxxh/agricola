import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MainBoard } from './mainBoard';
import { PlayerBoard } from './playerBoard';

const CustomTab = ({ children }) => <TabPanel>{children}</TabPanel>;

CustomTab.tabsRole = 'Tab'; // Required field to use your custom Tab

export function UI(props) {
  let tabList = [<Tab key={'main'}>Main</Tab>];
  let panelList = [<MainBoard key={'main'} />];
  for (let i = 0; i < props.numPlayers; i++) {
    tabList.push(<Tab key={i}>P{i}</Tab>);
    panelList.push(
      <CustomTab key={i}>
        <PlayerBoard {...props} playerId={i} />
      </CustomTab>
    );
  }
  return (
    <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
      <TabList>{tabList}</TabList>
      {panelList}
    </Tabs>
  );
}
