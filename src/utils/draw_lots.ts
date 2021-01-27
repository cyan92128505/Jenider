import { DrawData, FontData, Fortunes } from './darw_data';

class DarwLots {
  static Exec(question: string): string {
    let result = '';
    let charNumber = 0;
    if (!!question && `${question}`.length !== 0) {
      for (const qChar of question) {
        charNumber += DarwLots.GetCharDraw(qChar);
      }

      result = DarwLots.Draw(charNumber);
    }

    return result;
  }

  static GetCharDraw(char: string): number {
    for (const iterator of FontData) {
      for (const i of iterator.chars) {
        if (i === char) {
          return iterator.draw;
        }
      }
    }

    return 1;
  }

  static Draw(id: number): string {
    const pureId = DarwLots.FateNumber(id) % 100;
    const result = Fortunes[pureId];
    let content = '';
    content += `${result.編號}籤 ${result.運勢}\n`;
    content += `${result.內容.中文.join('\n')}\n \n`;
    content += `${result.解籤.中文.join('\n')}\n\n`;

    for (const iterator of result.解答) {
      content += `${iterator.key}: ${iterator.value}\n`;
    }

    return content;
  }

  static FateNumber(id: number): number {
    return id + DarwLots.RandomNumber(100, 1);
  }

  static RandomNumber(max: number, min: number): number {
    return Math.round(Math.random() * (max - min)) + min;
  }

  static SpliceText(rawContent: string): string {
    return `${rawContent}`.replace(/，/g, '，\n');
  }
}

export default DarwLots;
