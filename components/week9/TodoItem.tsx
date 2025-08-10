// components/week9/TodoItem.tsx
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

type Todo = { id: string; title: string; completed: boolean };
type Props = {
  item: Todo;
  onUpdate: (newTitle: string, id: string) => void;
  onCheck: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ item, onUpdate, onCheck, onDelete }: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
      }}
    >
      <TouchableOpacity style={{ flex: 2 }} onPress={() => onCheck(item.id)}>
        <FontAwesome name={item.completed ? 'check-square' : 'square-o'} size={23} />
      </TouchableOpacity>

      <View style={{ flex: 12 }}>
        <TextInput
          value={item.title}
          placeholder="What's in your mind? "
          onChangeText={(new_title) => onUpdate(new_title, item.id)}
        />
      </View>

      <TouchableOpacity style={{ flex: 1 }} onPress={() => onDelete(item.id)}>
        <FontAwesome name="trash" size={23} />
      </TouchableOpacity>
    </View>
  );
}
