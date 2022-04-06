var programNotes = document.getElementById('programNotes')
programNotes.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-music')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var modalTitle = programNotes.querySelector('.modal-title')
    var modalBody = programNotes.querySelector('.modal-body')
    switch(recipient) {
        case "kronodigger":
            modalTitle.innerHTML = "Alexey Gorokholinsky's <i>Good Times</i>"
            modalBody.innerHTML = `
Notes by Alexey Gorokholinsky
(<a target="_blank" href="https://kronodigger.bandcamp.com/album/good-times">source</a>)
<br><br>
This album is comprised of the music that was composed between 2012 and 2017.
The tracks were first written as stand-alone electronic tracks (Instrumental versions) and later added a full solo part for clarinet.
These compositions were created with intention to bridge the gap between classical music audience and electronic music lovers and to be performed mostly live with live clarinet playing.
Tested on live audience at various settings, these were some of the responses that I remembered:
<br><br>
"Well, I actually really loved this!"
<br>
- a hardcore traditional classical music supporter and patron in her mid 70s, who typically doesn't like anything contemporary
<br><br>
"Holy moly - have you got a whole orchestra behind you?"
<br>
- a fella at a nursing home after live performance of Space Jump with Bose L1 array speaker
<br><br>
"Your music sounds like Aphex Twin"
<br>
- one girl at a warehouse party in Brooklyn after a whole set on 100k watt sound system (Tsunami Bass)
<br><br>
"Why do you often use Japanese Anime sounds in your tracks?"
<br>
- a girl at a Taiwanese High School after full<span style="display: none;"><span class="bcTruncateEllipsis">...</span></span><span class="bcTruncateMore" style=""> concert
<br><br>
"Wow, you drank bunch of wine, vodka, beer, tequila and were still able to play everything without messing up!"
<br>
- friend at a piano school opening party
<br><br>
"Yaaaaaaaaaaayyyyyy......woooooo-hooooooooo"
<br>
- audience at Christmas Party in TADA venue (Taichung, Taiwan)
<br><br>
"Eeeeeeehhhhhhh-haaaaaaaaaaaaaa"
<br>
- coworkers at a corporate party during the talent show
<br><br>
"...."
<br>
- 0 people that came to the first big show with huge sound system
<br><br>
The test was a great success and the gap was bridged! Equal amount of people either liked it, or completely couldn't care any less - we will never know.
<br><br>
But, as we say in Russian - "If you don't praise yourself - no-one will".
<br>The music is actually pretty fun, and honestly, lots of inspiration, heart and good intentions were put into it.
<br><br>
Dedicated to all the people who like sunny weather, movement, fantasy, sci-fi, imagination, and positive thinking.
`
            break

        case "copland":
            modalTitle.innerHTML = "Aaron Copland's <i>Concerto</i> for Clarinet"
            modalBody.innerHTML = `
Notes by Vivian Perlis
(<a target="_blank" href="https://www.aaroncopland.com/works/clarinet-concerto/">source</a>)
<br><br>
The renowned jazz clarinetist Benny Goodman asked Copland to compose a work for him. The result was a two-movement concerto: the first section is one of Copland's most lyrical and melodious creations; the second is in an all-out jazzy style replete with a glissando or jazz "smear" at the end. The movements are connected by a cadenza for the soloist. Benny Goodman said in an interview, "I always felt good about that commission and about playing the Concerto with Aaron conducting." Since then, many of the foremost clarinetists worldwide have performed the piece.
`
            break

        case "electro":
            modalTitle.innerHTML = "Joshua Bennett's <i>Electroacoustic Etudes for Clarinet and Pure Data</i>"
            modalBody.textContent = "Josh Bennett's notes will go here"
            break

        case "tzigane":
            modalTitle.innerHTML = "Valerie Coleman's <i>Tzigane</i>"
            modalBody.innerHTML = `
Notes by Valerie Coleman
(<a target="_blank" href="http://www.bccivicmusic.org/2018/02/imani-winds-program-notes/">source</a>)
<br><br>
Tzigane (not to be confused with Ravel’s famous violin work of the same name) is a new work for wind quintet by Valerie Coleman, that celebrates the virtuosity of each member within the ensemble. Written in the fall of 2011, Coleman was inspired by two occurrences: Imani Winds’ collaboration with Palestinian oud player Simon Shaheen, and her recent completion of ROMA, a work for wind ensemble celebrating the culture of the Romani people (commonly referred to as ‘gypsies’). The work itself represents the third installment within a series inspired by the combination of Romani and middle eastern styles, the first two being a nonet for wind quintet and strings, and the previously mentioned wind ensemble.
<br><br>
Throughout the work, the bassoonist is scored to play a ‘low A’, which is typically not within the range of the bassoon, but is made possible with the insertion of a tube into the bell of the instrument, thereby extending the range. The work, however, is not about the unusual techniques, but rather stylized playing as Tzigane brings the same intensity and virtuosity found in gyspy violin to winds. This means that a certain level of freedom and passion is required to bring each solo alive, while a constant undercurrent of rhythm would provide a source of drive. The result is a colorful, highly-charged journey within one substantial movement.
`
            break
    }
})
