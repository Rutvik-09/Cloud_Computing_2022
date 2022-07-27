import json
import boto3

def lambda_handler(event, context):
    # TODO implement
    
    print(event["body"])
    
    b = json.loads(event["body"])
    print(type(b))
    
    dynamodb = boto3.resource('dynamodb')
    
    table = dynamodb.Table('Users')
    
    table.put_item(Item=b)
    
    return {
        'statusCode': 200,
        'body': event['body']
    }

     
