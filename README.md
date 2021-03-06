# Krumelur Player

## Running

### Query String Options

Use these to override some of the default values:

| Key                      | What         
| :----------------------- | :-------------------------------------------------------- |
| `randomKrumelurDelayMax` | Maxmium ms after which a random krumelur will appear      |
| `newKrumelurDelay`       | Ms after which a newly posted krumelur will appear        |
| `noEffects`              | Disables all effects = faster startup time = good for dev |

## Development
Start msb-chamberlain server, then:
```sh
$ open http://localhost:3000/krumelur/app
```

### Hiding, showing and drawing masks

<kbd>D</kbd> toggles settings box where you can show hide masks per layer or name

Draw masks like this:

- Add `?dev` to url
- Click to start drawing mask
- <kbd>ALT</kbd>+click to undo latest mask point
- <kbd>SHIFT</kbd>+click to remove all mask points


### Testing a krumelur motion path
```sh
$ open http://localhost:3000/krumelur/app/?dev&name=[desired krumelur file name]&behavior=[desired behavior]
```
The desired krumelur with the desired behavior will appear. Press <kbd>A</kbd> to add it again. Press <kbd>C</kbd> to remove all krumelurer.

### Converting After Effects Motion Paths to JSON
```sh
$ python kf2json.py [input] [output] [framerate]
```
Example:
```sh
$ python kf2json.py motionpath.txt myanimation.json 60
```

### Converting JSON masks to SVG
```sh
$ python json2svg.py [inputdirectory] [outputdirectory]
```
Will make SVG versions of all JSON masks in `inputdirectory` and place them in `outputdirectory`.

Example:
```sh
$ python json2svg.py masks/ svgs/
```

### Creating an effects JSON
```sh
$ python effect2json.py [inputdirectory] [outfile] [name] [trigger] [z]
```
Will create a JSON file with the format:
```
{
    "name": [name],
    "trigger": [trigger],
    "z": [z],
    "urls" [
        "effects/[name]/file0.png",
        "effects/[name]/file1.png",
        ...
    ]
}
```
where the urls are created from the contents of [inputdirectory].

### I want one really big screen
System Preferences -> Mission Control -> Uncheck "Displays have separate Spaces"
