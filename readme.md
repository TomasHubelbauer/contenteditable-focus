# `contenteditable` Focus

I'm having some problems with `contenteditable` divs and moving focus among them
where the divs are also wrapped in HTML custom elements (which might play a role
or not) and upon moving the focus the caret is lost and the div is not focused
but the element itself seems to be.

This is supposed to repro this behavior so I can isolate it and fix it, but so
far I've not been able to reproduce.

The problem occurs in [Paper](https://github.com/tomashubelbauer/paper) so I'll
play around with it some more in the future and see if I can repro, fix and then
carry the fix over to Paper.

The workaround I found is to click away from the first content editable div to
an area which is not editable and then focus the next div, with this flow, the
focus works as expected.
