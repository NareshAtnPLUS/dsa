package arrayhashing

import "fmt"

func GroupAnagram(strs []string) [][]string {
	anagramMap := make(map[[26]int][]string)
	// grouping the anagrams with the alphabet-count encoding;
	for _, word := range strs {
		var count [26]int // alphabet list with counts 0 intially; this acts as key

		for _, char := range word {
			count[char-'a']++
		}
		// appending the word to the bucket it belongs [by alphabet key]
		anagramMap[count] = append(anagramMap[count], word)
	}
	fmt.Println(anagramMap)
	idx := 0
	result := make([][]string, len(anagramMap))
	for _, groupedAnagramList := range anagramMap {
		result[idx] = groupedAnagramList
		idx++
	}
	fmt.Println(result)
	return result
}
