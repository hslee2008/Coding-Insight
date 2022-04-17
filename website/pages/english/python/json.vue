<template>
  <div>
    <div>
      <div style="display: flex; justify-content: center">
        <GlobalImage
          class="img-fluid"
          max-width="400px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoU78Hj6DPZq_rVh1dyNTc4Lwt_Z05Vr-SRA&usqp=CAU"
        />
      </div>
      <div class="ma-auto">
        <h2>JSON</h2>
        <p>
          JSON is short for JavaScript Object Notation and it is a type of
          data.<br /><br />

          JSON is very similar to dictionaries but they are a littble bit
          different.<br /><br />

          Almost every new programming language in the world supports JSON.<br /><br />

          Note that JSON should always have ""(Double) surrounding key and the
          value can only be string, dictionary, list, tuple, number, and
          None.<br /><br />

          <code>
            import json<br /><br />

            someJson = '{"name": "Hyunseung Lee", "bornIn": "2008", "gender":
            "male"}'
          </code>
        </p>
      </div>
    </div>

    <Header type="Python" num="57" title="JSON" />

    <div>
      <div>
        <h2>JSON to Dictionary</h2>
        <p>
          json.loads() converts JSON to dictionary.<br /><br />

          This way, you can access each key.<br /><br />

          <code>
            import json<br />
            someJson = '{"name": "Hyunseung Lee", "bornIn": "2008", "gender":
            "male"}'<br /><br />

            print(json.loads(someJson)["name"]) #Hyunseung Lee is rinted
          </code>
        </p>
        <iframe :src="`${trinket}3500e49e2c`" height="356" loading="lazy" />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Dictionary to JSON</h2>
        <p>json.dumps() method will convert dictionary to JSON.</p>
      </div>
      <iframe :src="`${trinket}efb76f8dd2`" height="356" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Formatting JSON</h2>

        There are a lot of format settings you have in JSON which makes it
        easier to handle than dictionaries.<br /><br />

        <h2>Indentation</h2>

        We can set the indentation of each pair, making it easier for us to read
        in the terminal(if we print JSON).<br /><br />

        <code> print(json.dumps(someJson, indent=2)) </code>

        <h2>Sort JSON</h2>

        We can sort JSON keys in alphabetical descending order.<br /><br />

        <code> print(json.dumps(someJson, indent=2, sort_keys=True)) </code>

        <h2>JSON characters</h2>

        JSON uses ':' to seperate keys and values.<br /><br />

        It also uses ','(Comma) to seperate each pair.<br /><br />

        Using the 'seperator' argument in dumps() method, we can set the
        character to use instead of ':' and ','(Comma).<br /><br />

        <code> print(json.dumps(someJson, seperator=(". ", "==>"))) </code>

        The example above will print the JSON with '. ' seperating keys and
        values and '==>' seperating each pair.
      </div>
      <iframe :src="`${trinket}efb76f8dd2`" height="200" />
    </div>

    <Navigation bef="pip" aft="array" />
  </div>
</template>

<script>
  export default {
    page: 'JsonPage',
  };
</script>
