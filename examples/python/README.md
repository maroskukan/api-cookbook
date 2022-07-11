# Python and API(s)

## Environment

```bash
docker container run --rm -it \
                     --volume ${PWD}:/data \
                     --workdir /data \
                     python:slim bash
```

## Tips

### Parsing

In order to parse a response formatted in JSON, you can pipe the output through Python JSON tool.

```bash
curl -s https://deckofcardsapi.com/api/deck/new/ | python -m json.tool
{
    "success": true,
    "deck_id": "8cve9t0noawa",
    "remaining": 52,
    "shuffled": false
}
```

In order to save a value from key in bash variable.

```bash
DECK_ID=$(curl -s https://deckofcardsapi.com/api/deck/new/ | python -c "import sys, json; print(json.load(sys.stdin)['deck_id'])")
echo $DECK_ID
8cve9t0noawa
```