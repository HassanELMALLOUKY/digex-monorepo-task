export interface LetterModel {
  id: number;
  senderAddress: string;
  receiverAddress: string[];
  blockA: string[];
  subject: string;
  body: string;
  footnote: string;
}
