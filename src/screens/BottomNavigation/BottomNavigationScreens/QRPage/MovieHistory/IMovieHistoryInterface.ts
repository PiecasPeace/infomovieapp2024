export interface HistoryProps {
  history: string[];
  onPress: (index: number) => Promise<void>;
}

export interface HistoryItemProps extends HistoryProps {
  index: number;
}
