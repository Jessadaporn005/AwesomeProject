import TodoItem from "@/components/week9/TodoItem";
import { getData, storeData /*, removeData */ } from "@/utils/storage"; // ⬅️ เพิ่ม storeData (removeData ไม่จำเป็นถ้าเซฟทั้ง array)
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

type Todo = { id: string; title: string; completed: boolean };

const TODOS_KEY = "todos";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // helper: อัปเดต state แล้วเซฟลง Storage
  const persist = async (next: Todo[]) => {
    setTodos(next);
    await storeData(TODOS_KEY, next);
  };

  const onLoad = async () => {
    // READ ITEMS FROM STORAGE
    const data = await getData<Todo[] | null>(TODOS_KEY);

    // SET STATE
    if (Array.isArray(data)) {
      setTodos(data);
    } else {
      setTodos([]); // เผื่อยังไม่เคยมีข้อมูล
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const onCreate = () => {
    const new_data: Todo = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      title: "",
      completed: false,
    };
    const t = [...todos, new_data];
    // UPDATE + SAVE
    persist(t);
  };

  const onUpdate = (new_title: string, id: string) => {
    const t = [...todos];
    const index = t.findIndex((item) => item.id === id);
    if (index === -1) return; // กันกรณีหาไม่เจอ
    t[index].title = new_title;
    persist(t);
  };

  const onCheck = (id: string) => {
    const t = [...todos];
    const index = t.findIndex((item) => item.id === id);
    if (index === -1) return;
    t[index].completed = !t[index].completed;
    persist(t);
  };

  const onDelete = (id: string) => {
    const t = todos.filter((item) => item.id !== id);
    persist(t);
    // ถ้าอยากลบเป็นราย item ใน storage แยก key ต่อหัว ค่อยใช้ removeData
    // แต่ในที่นี้เราเก็บเป็น array เดียว จบด้วย persist ตลอดพอแล้ว
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 15 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onUpdate={onUpdate}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        )}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          width: 50,
          height: 50,
          alignItems: "center",
          alignContent: "center",
          borderRadius: 25,
          position: "absolute",
          right: 10,
          bottom: 10,
        }}
        onPress={onCreate}
      >
        <FontAwesome name="plus" size={26} />
      </TouchableOpacity>
    </View>
  );
}
