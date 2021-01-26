import dayjs from 'dayjs';

export type FateProps = {
  question: string;
  result: string;
  datetime: string;
};
class Fate {
  question = '';

  result = '';

  datetime = dayjs().format();

  constructor(option?: FateProps) {
    if (option) {
      this.result = option.result;
      this.question = option.question;
      this.datetime = option.datetime;
    }
  }

  reset() {
    this.result = '';
    this.question = '';
    this.datetime = dayjs().format();
  }
}

export default Fate;
