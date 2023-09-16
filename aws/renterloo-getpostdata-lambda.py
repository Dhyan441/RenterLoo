import boto3
import json

# only needed if you're returning something not in json format
def respond(res):
    return {
        'statusCode': '200', 
        'body': json.dumps(res),
        'headers': {
            'Content-Type': 'application/json',
        },
    }

def lambda_handler(event, context):
    
    addressId = event['addressId']
    
    client = boto3.resource('dynamodb')
    table = client.Table("renterloo-posts-db")
    
    data_raw = table.get_item(
        TableName='renterloo-posts-db',
        Key={'addressId': addressId}
        )
    
    data_json = data_raw['Item']

    return data_json
