const cont = document.querySelector( "#content" );

const menu = `

<h1>&#54028;&#51060;&#50028; &#49884;&#51089;</h1>
<p id="men">

<a href="python.html">(1) &#54028;&#51060;&#50028;</a>
<a href="install.html">(2) &#54028;&#51060;&#50028; &#45796;&#50868;&#47196;&#46300;</a>
<a href="vscode.html">(3) VSCode &#45796;&#50868;&#47196;&#46300;</a>
<a href="io.html">(4) &#51077;&#52636;&#47141;</a>
<a href="variable.html">(5) &#48320;&#49688;</a>
<br />
<br />
<a href="datatype.html">(6) &#45936;&#51060;&#53552; &#54805;&#53468;</a>
<a href="comment.html">(7) &#51452;&#49437; </a>
<a href="string.html">(8) &#47928;&#51088; </a>
<a href="stringmethod1.html">(9) &#47928;&#51088; &#47700;&#49436;&#46300;1 </a>
<a href="stringmethod2.html">(10) &#47928;&#51088; &#47700;&#49436;&#46300;2 </a>
<a href="escapechar.html">(11) &#51060;&#49828;&#52992;&#51060;&#54532; &#47928;&#51088; </a>

</p>

<br /><br /><br /><br />

<h1>&#54028;&#51060;&#50028; &#44592;&#48376;</h1>
<p id="men">

<a href="ascii.html">(12) &#50500;&#49828;&#53412; &#47928;&#51088; </a>
<a href="boolean.html">(13) &#48520;&#47532;&#50616; </a>
<a href="number.html">(14) &#49707;&#51088; </a>
<a href="operator.html">(15) &#50672;&#49328;&#51088; </a>
<br />
<br />
<a href="numtype.html">(16) &#49707;&#51088; &#51333;&#47448; </a>
<a href="nummethod.html">(17) &#49707;&#51088; &#47700;&#49436;&#46300; </a>
<a href="list.html">(18) &#47532;&#49828;&#53944; </a>
<a href="listmethod1.html">(19) &#47532;&#49828;&#53944; &#47700;&#49436;&#46300; 1 </a>
<a href="listmethod2.html">(20) &#47532;&#49828;&#53944; &#47700;&#49436;&#46300; 2 </a>

</p>

<br /><br /><br /><br />

<h1>&#54028;&#51060;&#50028; &#52488;&#44553;</h1>

<p id="men">

<a href="dictionary.html">(21) &#46357;&#49492;&#45320;&#47532; </a>
<a href="dictionarymethod.html">(22) &#46357;&#49492;&#45320;&#47532; &#47700;&#49436;&#46300; </a>
<a href="tuple.html">(23) &#53916;&#54540; </a>
<a href="set.html">(24) &#51665;&#54633; </a>
<a href="setmethod.html">(25) &#51665;&#54633; &#47700;&#49436;&#46300; </a>
<br />
<br />
<a href="if.html">(26) &#51312;&#44148;&#47928; </a>
<a href="ifmaster.html">(27) &#51312;&#44148;&#47928; &#47560;&#49828;&#53552;&#54616;&#44592; </a>
<a href="none.html">(28) None </a>
<a href="function.html">(29) &#54632;&#49688; </a>
<a href="functionhard.html">(30) &#45908; &#50612;&#47140;&#50868; &#54632;&#49688; &#45236;&#50857; </a>
<a href="specialvariable.html">(31) &#53945;&#48324;&#54620; &#48320;&#49688; </a>

</p>

<br /><br /><br /><br />

<h1>&#54028;&#51060;&#50028; &#51473;&#44553;</h1>

<p id="men">

<a href="type.html">(32) &#53440;&#51077; &#51648;&#51221;</a>
<a href="anonymousfunction.html">(33) &#51061;&#47749; &#54632;&#49688;</a>
<a href="for.html">(34) for &#48152;&#48373;&#47928;</a>
<a href="fortype.html">(35) for &#48152;&#48373;&#47928; &#51333;&#47448;</a>
<a href="forfunction.html">(36) for &#48152;&#48373;&#47928; &#54632;&#49688;</a>
<a href="while.html">(37) while &#48152;&#48373;&#47928;</a>
<br />
<br />
<a href="oneliner.html">(38) &#53076;&#46300;&#47484; &#54620; &#51460;&#50640;</a>
<a href="etcfunction.html">(39) &#45908; &#45796;&#50577;&#54620; &#54632;&#49688;</a>
<a href="module.html">(40) &#47784;&#46280; &#44592;&#48376;</a>
<a href="modulemaster.html">(41) &#47784;&#46280; &#47560;&#49828;&#53552;&#54616;&#44592;</a>
<a href="pythonmodule.html">(42) &#54028;&#51060;&#50028; &#47784;&#46280;</a>
<a href="date.html">(43) &#45216;&#51676;</a>
<a href="random.html">(44) &#47004;&#45924;</a>
<a href="regex.html">(45) &#51221;&#44508;&#49885;</a>
</p>

<br /><br /><br /><br />

<h1>&#54028;&#51060;&#50028; &#44256;&#44553;</h1>

<p id="men">

<a href="class.html">(46) &#53364;&#47000;&#49828;</a>
<a href="classmethod.html">(47) &#53364;&#47000;&#49828; &#47700;&#49436;&#46300;</a>
<a href="math.html">(48) &#49688;&#54617; - &#53685;&#44228;</a>
<a href="file.html">(49) &#54028;&#51068; &#45796;&#47336;&#45716; &#51089;&#50629;</a>
<a href="filereading.html">(50) &#54028;&#51068; &#51069;&#44592;</a>
<a href="filewriting.html">(51) &#54028;&#51068; &#50416;&#44592;</a>
<br /><br />
<a href="etcfile.html">(52) &#54028;&#51068; &#47564;&#46308;&#44592;, &#49325;&#51228;&#54616;&#44592;, encoding</a>
<a href="contextmanager.html">(53) &#52968;&#53581;&#49828;&#53944; &#47588;&#45768;&#51200;</a>
<a href="datachange.html">(54) &#45936;&#51060;&#53552; &#54805;&#53468; &#48148;&#44984;&#44592;</a>
<a href="stringascode.html">(55) &#47928;&#51088;&#47484; &#53076;&#46300;&#52376;&#47100; &#49892;&#54665;&#54616;&#44592;</a>
<a href="pip.html">(56) PIP</a>

</p>

<br /><br /><br /><br />

<h1>&#54028;&#51060;&#50028; &#44256;&#49688;</h1>

<p id="men">

<a href="json.html">(57) JSON</a>
<a href="array.html">(58) &#51221;&#47148;</a>
<a href="arraytype.html">(59) &#51221;&#47148; &#51333;&#47448;</a>
<a href="arrayshape.html">(60) &#51221;&#47148; &#47784;&#50577;</a>
<a href="error.html">(61) &#50696;&#50808; &#52376;&#47532;</a>
<a href="error2.html">(62) &#50640;&#47084;</a>
<a href="logging.html">(63) &#47196;&#44613;</a>
<a href="mapandreduceandfilter.html">(64) map & reduce & filter</a>
<a href="zlib.html">(65) ZLIB</a>
<a href="decorator.html">(66) &#45936;&#53076;&#47112;&#51060;&#53552;</a>
<a href="mydecorator.html">(67) &#45208;&#47564;&#51032; &#45936;&#53076;&#47112;&#51060;&#53552; &#47564;&#46308;&#44592;</a>

</p>

<h1></h1>

<p>

<a href="newline.html">(68) &#49352;&#47196;&#50868; &#51460;</a>
<a href="beedongee.html">(69) &#48708;&#46041;&#44592;</a>


</p>

`;

document.querySelector( "#menu" ).innerHTML = menu;


document.querySelector( "#menu" ).style.textAlign = "center";
document.querySelector( "#menu" ).style.display = "none";

document.querySelector( "#butty" ).addEventListener( 'click', () => {
  if ( document.querySelector( "#menu" ).style.display == "none" ) {
    document.querySelector( "#menu" ).style.display = "block"
  } else {
    document.querySelector( "#menu" ).style.display = "none"
  }
} )
