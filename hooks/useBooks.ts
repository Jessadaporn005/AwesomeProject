import { addBook, deleteBook, getBooks, updateBook } from '@/utils/book-storage';
import { Book } from '@/utils/types';
import { useCallback, useEffect, useState } from 'react';

/** Hook จัดการข้อมูลหนังสือ พร้อมสถานะ loading / error และ refresh */
export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (e: any) {
      setError(e?.message || 'โหลดข้อมูลล้มเหลว');
    } finally {
      setLoading(false);
    }
  }, []);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const data = await getBooks();
      setBooks(data);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const create = useCallback(async (payload: Omit<Book, 'id'>) => {
    const book: Book = { id: Date.now().toString(), ...payload, createdAt: Date.now() };
    await addBook(book);
    await load();
    return book;
  }, [load]);

  const update = useCallback(async (b: Book) => {
    await updateBook(b);
    await load();
  }, [load]);

  const remove = useCallback(async (id: string) => {
    await deleteBook(id);
    await load();
  }, [load]);

  useEffect(() => { load(); }, [load]);

  return { books, loading, error, refresh, refreshing, create, update, remove, reload: load };
}
