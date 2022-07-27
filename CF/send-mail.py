import boto3
import json

def lambda_handler(event, context):
    
    db_client = boto3.resource('dynamodb')
    
    table = db_client.Table('Users')
    
    response = table.scan()
    dynamodb_data = response['Items']
    
    print(dynamodb_data)

    # email = []
    
    for i in range(len(dynamodb_data)):
        s = dynamodb_data[i]["email"]
        # print(dynamodb_data[i]["email"])
        # print(s)
        # email.append(dynamodb_data[i]["email"])

    print(s)
    
       
    sns_client = boto3.client('sns')
    
    subscription = sns_client.subscribe(TopicArn='arn:aws:sns:us-east-1:946670177656:RegistrationMail', Protocol='email', Endpoint='rt994397@dal.ca')


    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
