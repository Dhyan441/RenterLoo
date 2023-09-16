import json
import boto3

def lambda_handler(event, context):
    client = boto3.resource("dynamodb")
    table = client.Table("renterloo-posts-db")

    addressId = event['addressId']
    name = event['name']
    
    table.put_item(Item={'addressId': addressId, "name": name})
    
    return None
