export const getLocalItem = (key: string): any => {
  const item: string | null = localStorage.getItem(key);

  return item ? JSON.parse(item) : item;
}

export const saveLocalItem = (key: string, data: any): void => {
  const item: string = JSON.stringify(data);

  localStorage.setItem(key, item);
}

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
}