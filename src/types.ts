export type Credentials = {
   email: string;
   password: string;
};

export type ApiError = {
   response: {
      data: {
         message: string;
      };
   };
};
