import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from 'aws-lambda';

export const handler:Handler = async(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {

  const max = 999;
  const value = Math.floor(Math.random()* max) + 1;

  const response = {
    statusCode: 200,
    body: `The random value (max ${max}) is ${value}`,
  };

  return response;
}

