import json
import boto3

def lambda_handler(event, context):
    # TODO implement
    
    dynamodb = boto3.resource('dynamodb')
    
    table = dynamodb.Table('Products')
    
    response = table.scan()
    
    data = response['Items']
    
    print(data)
    
    return {
        'statusCode': 200,
        'body': json.dumps(data)
    }
