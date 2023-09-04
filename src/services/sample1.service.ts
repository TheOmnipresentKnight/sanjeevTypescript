import HttpException from "../exceptions/shared-exception";

class Sample1Service {
  public a = 1;

  public sampleOneService = async (haa: any) => {
    try {
      return { jaa: haa, gaa: "gaa" };
    } catch (error) {
      throw new HttpException(409, "Error in sample");
    }
  };
}

export default Sample1Service;
