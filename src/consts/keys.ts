export enum KeyType {
  MULTISELECT = 'Shift',
  DELETE = 'Delete',
  COPY = 'Ctrl+C',
  PASTE = 'Ctrl+V',
  CUT = 'Ctrl+X',
  DUPLICATE = 'Ctrl+B',
  Z_INDEX_UP = 'Ctrl+Up',
  Z_INDEX_DOWN = 'Ctrl+Down',
  UNDO = 'Ctrl+Z',
  REDO = 'Ctrl+Y',
  DRAG_STAGE = ' ', //space
  UNSELECT = 'Esc',
  ZOOM = 'Mouse wheel',
  SAVE = 'Alt+S',
}

export type KeyWithDescriptionType = {
  key: KeyType | string[];
  description: string;
};

export const KeysWithDescription: KeyWithDescriptionType[] = [
  { key: KeyType.MULTISELECT, description: 'Selecionar vários objetos de uma vez.' },
  { key: KeyType.DELETE, description: 'Excluir um objeto.' },
  { key: KeyType.COPY, description: 'Copiar um objeto.' },
  { key: KeyType.PASTE, description: 'Colar o objeto copiado.' },
  { key: KeyType.CUT, description: 'Cortar um objeto.' },
  { key: KeyType.DUPLICATE, description: 'Duplicar um objeto.' },
  { key: KeyType.Z_INDEX_UP, description: 'Trazer um objeto para frente.' },
  { key: KeyType.Z_INDEX_DOWN, description: 'Enviar um objeto para trás.' },
  { key: KeyType.UNDO, description: 'Desfazer a última ação.' },
  { key: KeyType.REDO, description: 'Refazer a última ação.' },
  { key: KeyType.DRAG_STAGE, description: 'Arrastar o objeto.' },
  { key: KeyType.UNSELECT, description: 'Desmarcar um objeto.' },
  { key: KeyType.ZOOM, description: 'Aumentar / Reduzir o zoom.' },
  { key: KeyType.SAVE, description: 'Salvar as alterações recentes.' },
];
