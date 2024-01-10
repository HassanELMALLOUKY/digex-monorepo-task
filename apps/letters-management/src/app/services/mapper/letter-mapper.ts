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
