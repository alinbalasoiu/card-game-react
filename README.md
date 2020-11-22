# deck-of-cards-react
A JavaScript project

As a magician, I'd like to shuffle, draw and sort cards so that I can perform magic
tricks

Acceptance Criteria
1. Can I shuffle the deck of cards?
2. Can I draw any given number of cards from the deck, with the cards being removed
from the original deck?
3. Can I draw any given number of cards from the deck and then sort the drawn cards,
with the cards being removed from the original deck?
4. Sorted cards are sorted by suit: Clubs, Spades, Hearts, Diamonds; then by value: Ace
is high.

In the solution, the cards are generated, shuffled after generation and displayed on the deck.
If I click on any card, the card will be removed from the original deck and moved to one new deck, according to its suite.
When placed on the new deck, the cards (if there are more than one) will be sorted by their values.

A multiple selection of the cards are allowed. To do this just press and hold the SHIFT key while select / deselect a card. The selected cards are removed after pressing the 'Remove Selected' button. Also, they are all unselected if another card is pressed without holding the SHIFT Key.


How to install and run:
cd into the project folder then:
npm install
npm run build
serve -s build
