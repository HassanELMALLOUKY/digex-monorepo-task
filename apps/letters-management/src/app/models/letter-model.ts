export class LetterModel {
  id: number;
  senderAddress: string;
  receiverAddress: string[];
  blockA: string[];
  subject: string;
  body: string;
  footnote: string;
  // generate constructor with all properties
  constructor(id: number, senderAddress: string, receiverAddress: string[], blockA: string[], subject: string, body: string, footnote: string) {
    this.id = id;
    this.senderAddress = senderAddress;
    this.receiverAddress = receiverAddress;
    this.blockA = blockA;
    this.subject = subject;
    this.body = body;
    this.footnote = footnote;
  }
}
