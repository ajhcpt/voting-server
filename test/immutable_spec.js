import { expect } from 'chai';
import { List, Map } from 'immutable';

describe('immutability', () => {

	describe('a number', () => {
		function increment(currenState) {
			return currenState + 1;
		}

		it('is immutable', () => {
			let state = 42;
			let nextState = increment(state);

			expect(nextState).to.equal(43);
			expect(state).to.equal(42);
		});
	});

	describe('a list', () => {
		function addMovie(currenState, movie) {
			return currenState.push(movie);
		}

		it('is immutable', () => {
			let state = List.of('Trainspotting', '28 days later');
			let nextState = addMovie(state, 'Sunshine');

			expect(nextState).to.equal(List.of(
				'Trainspotting',
				'28 days later',
				'Sunshine')
			);
			
			expect(state).to.equal(List.of(
				'Trainspotting',
				'28 days later')
			);
		})
	})

	describe('a tree', () => {
		function addMovie(currenState, movie) {
			return currenState.update('movies', movies => movies.push(movie));
		}

		it('is immutable', () => {
			let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });

      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
		})
	})
})