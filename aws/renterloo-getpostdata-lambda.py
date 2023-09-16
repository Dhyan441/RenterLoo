import boto3
import json

def respond(res):
    return {
        'statusCode': '200', 
        'body': json.dumps(res),
        'headers': {
            'Content-Type': 'application/json',
        },
    }

def lambda_handler(event, context):
    body = event['body']
    addressId = json.loads(body)['addressId']
    return respond(addressId)
    