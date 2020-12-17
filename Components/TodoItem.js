import React from 'react';

import {StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';

export default function TodoItem({item, pressHandler}) {
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});
