package graphs

import (
	"github.com/NareshAtnPLUS/dsa-utils/pkg/datastructures/queue"
)

type Word string
type Pattern string

func LadderLengthV2(beginWord, endWord string, wordList []string) int {
	wordMap := make(map[Word]bool)
	for _, word := range wordList {
		wordMap[Word(word)] = true
	}
	if !includes(wordMap, Word(beginWord)) {
		return 0
	}
	patternWordGraph := make(map[Pattern][]Word)
	visited := make(map[Word]bool)
	for _, word := range wordList {
		for idx := range word {
			wordPattern := Pattern(createPatternString(word, idx))
			patternWordGraph[wordPattern] = append(patternWordGraph[wordPattern], Word(word))
		}
	}
	shortestLadderLength := computeShortestWordLadder(Word(beginWord), Word(endWord), &patternWordGraph, &visited)
	return shortestLadderLength
}
func computeShortestWordLadder(beginWord, endWord Word, patternWordGraph *map[Pattern][]Word, visited *map[Word]bool) int {
	queue := queue.GenericQueue[Word]{}
	queue.Enqueue(beginWord)
	(*visited)[beginWord] = true
	shortestPath := 1

	for len(queue) > 0 {
		queueLen := len(queue)
		for idx := 0; idx < queueLen; idx++ {
			word, _ := queue.Dequeue()

			if word == endWord {
				return shortestPath
			}

			for jdx := range word {
				wordPattern := Pattern(createPatternString(string(word), jdx))
				neighbourWords := (*patternWordGraph)[wordPattern]

				for _, neighbourWord := range neighbourWords {
					if !(*visited)[neighbourWord] {
						(*visited)[neighbourWord] = true
						queue.Enqueue(neighbourWord)
					}
				}
			}
		}
		shortestPath++
	}
	return 0
}
