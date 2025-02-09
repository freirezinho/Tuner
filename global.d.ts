/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Here you can declare the types of libs third-party
 */
declare global {

  type FunctionVoid = () => void;

  namespace Render2D {
    interface Wave {
      color: string,
      width: number,
    }

    interface Text {
      font: string;
      align: CanvasTextAlign;
      value: string;
      color: string;
    }

    interface Parameters {
      bufferLength: number;
      canvas?: HTMLCanvasElement;
      background?: string;
      wave?: Wave;
      text?: Text;
    }

    type CallbackFrame = FunctionVoid;
  }

}

export { };
