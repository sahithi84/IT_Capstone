/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {OnlineGreenCircle} from '../../svgs';

export const CustomTabBar = ({tabs, activeTab, onTabPress}: any) => {
  return (
    <ScrollView
      horizontal
      style={{
        height: 48,
        flexGrow: 0,
        backgroundColor: '#F0F0F0',
      }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabContainer}>
      {tabs.map((tab: any, index: number) => (
        <TouchableOpacity
          key={index}
          style={[styles.tabItem, activeTab === index && styles.activeTabItem]}
          onPress={() => {
            onTabPress(index);
          }}>
          {activeTab === index ? (
            <OnlineGreenCircle />
          ) : (
            <View style={{height: 8, width: 8}} />
          )}
          <Text
            style={[
              styles.tabText,
              activeTab === index && styles.activeTabText,
            ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    height: 48,
  },
  tabItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 48,
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  activeTabItem: {
    borderColor: 'transparent',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  activeTabItem1: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
  },
  activeTabItem2: {
    borderTopRightRadius: 20,
  },
  tabText: {
    fontSize: 13,
    color: 'black',
  },
  activeTabText: {
    color: '#7A9D54',
    fontWeight: 'bold',
  },
});
