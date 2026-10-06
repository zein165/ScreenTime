// --- START LOCAL DATA & PERSISTENCE ---
// [CREATE/UPDATE] Menyimpan data secara lokal menggunakan AsyncStorage
const saveData = async (value: string) => {
  try {
    await AsyncStorage.setItem('@data_kunci', value);
  } catch (e) {
    // error reading value
  }
};
