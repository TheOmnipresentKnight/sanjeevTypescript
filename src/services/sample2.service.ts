import HttpException from "../exceptions/shared-exception";

class Sample2Service {
  public a = 1;

  public sampleTwoService = async (haa: any) => {
    try {
      return {
        jaa: haa,
        gaa: "gaa",
        bla: "ldakslksldklsklskdlskdlskdl",
        arra: [1, 2, 3, 43, 543, 53, 43, 432, 4, 32],
      };
    } catch (error) {
      throw new HttpException(409, "Error in sample");
    }
  };
}

export default Sample2Service;
