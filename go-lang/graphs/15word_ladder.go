package graphs

import "data-structures/dsa-practice/utils"

/*
	In order to reach the endWord from the beginWord the endWord has to be there in the wordList
*/
func LadderLength(beginWord, endWord string, wordList []string) int {
	if !includes(wordList, endWord) {
		return 0
	}

	neighbours := make(map[string][]string)
	wordList = append(wordList, beginWord)

	for _, word := range wordList {
		// for every word in the word list we want to find every possible pattern for this word.
		// here j is the pointer just to go through every single position of the word
		// we know that all the words are of same length
		for idx := range word {
			// for each position of the word, replace the char with wildcard so that we will get the
			// pattern. we are transforming this word string into the pattern string.
			pattern := createPatternString(word, idx)
			neighbours[pattern] = append(neighbours[pattern], word)
		}
	}
	// data structures for doing bfs on the neighbours graph.
	visited := make(map[string]bool)
	queue := utils.QueueStr{}

	// starting bfs on the beginWord
	visited[beginWord] = true
	queue.Enqueue(beginWord)
	shortestPath := 1
	for len(queue) > 0 {
		queueLength := len(queue)
		for idx := 0; idx < queueLength; idx++ {
			word, _ := queue.Dequeue()
			if word == endWord {
				return shortestPath
			}

			for jdx := range word {
				pattern := createPatternString(word, jdx)
				for _, neighbourWord := range neighbours[pattern] {
					if !visited[neighbourWord] {
						visited[neighbourWord] = true
						queue.Enqueue(neighbourWord)
					}
				}
			}
		}
		shortestPath += 1
	}

	return 0
}

func includes(wordList []string, word string) bool {
	for _, _word := range wordList {
		if _word == word {
			return true
		}
	}
	return false
}
func createPatternString(word string, idx int) string {
	pattern := word[:idx] + "*" + word[idx+1:]
	return pattern
}
