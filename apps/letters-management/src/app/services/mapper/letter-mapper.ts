import { LetterModel } from '../../models/letter-model';


export function mapJsonToLetterModel(json: any): LetterModel {
  return new LetterModel(
    0,
    json.senderAddress,
    json.receiverAddress,
    json.blockA,
    json.subject,
    json.body,
    json.footnote
  );
}
export function mapLetterModelToJson(letterModel: LetterModel): any {
  return {
    id: letterModel.id,
    senderAddress: letterModel.senderAddress,
    receiverAddress: letterModel.receiverAddress,
    blockA: letterModel.blockA,
    subject: letterModel.subject,
    body: letterModel.body,
    footnote: letterModel.footnote
  };
}
