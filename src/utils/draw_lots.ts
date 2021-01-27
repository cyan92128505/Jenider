import { DrawData, FontData, Fortunes } from './darw_data';

export type DarmPoem = {
  result: string;
  poemImages: string[];
};

class DarwLots {
  static Exec(question: string): DarmPoem {
    let result = '';
    let charNumber = 0;
    if (!!question && `${question}`.length !== 0) {
      for (const qChar of question) {
        charNumber += DarwLots.GetCharDraw(qChar);
      }
    }

    const pureId = DarwLots.FateNumber(charNumber) % 100;

    result = DarwLots.Draw(pureId);

    return {
      result,
      poemImages: [DarwLots.PoemImage(pureId, 'a'), DarwLots.PoemImage(pureId, 'b')],
    };
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
    const result = Fortunes[id];
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

  static PoemImage(id: number, type: string) {
    const idString = `${1000 + (id % 100) + 1}`.substr(1);
    return `http://www.chance.org.tw/%E7%B1%A4%E8%A9%A9%E9%9B%86/%E6%B7%BA%E8%8D%89%E9%87%91%E9%BE%8D%E5%B1%B1%E8%A7%80%E9%9F%B3%E5%AF%BA%E4%B8%80%E7%99%BE%E7%B1%A4/%E6%B7%BA%E8%8D%89%E9%87%91%E9%BE%8D%E5%B1%B1%E8%A7%80%E9%9F%B3%E5%AF%BA%E4%B8%80%E7%99%BE%E7%B1%A4%E6%8E%83%E6%8F%8F%E5%9C%96%E7%89%87/%E6%B7%BA%E8%8D%89%E9%87%91%E9%BE%8D%E5%B1%B1%E8%A7%80%E9%9F%B3%E5%AF%BA%E4%B8%80%E7%99%BE%E7%B1%A4${idString}${type}.jpg`;
  }
}

export default DarwLots;
