package arrayhashing

import fmt "fmt"

func ValidAnagram(source string, target string) bool {
	charFrequencyMap := make(map[rune]int)
	for _, char := range target {
		if _, exists := charFrequencyMap[char]; !exists {
			charFrequencyMap[char] = 0
		}
		charFrequencyMap[char] += 1
	}
	fmt.Println("Character Frequency Map of target str: ", charFrequencyMap)
	for _, char := range source {
		if _, exists := charFrequencyMap[char]; !exists {
			return false
		} else {
			// it exists
			charFrequencyMap[char] -= 1
		}
	}
	for _, frequency := range charFrequencyMap {
		if frequency != 0 {
			return false
		}
	}
	return true
}
func ValidAnagramV2(source string, target string) bool {
	sourceLength, targetLength := len(source), len(target)
	if sourceLength != targetLength {
		return false
	}
	store := make([]int, 26)

	for idx := range source {
		store[source[idx]-'a']++
		store[target[idx]-'a']--
	}
	fmt.Println(store)
	for _, remainingFrequency := range store {
		if remainingFrequency != 0 {
			return false
		}
	}
	return true
}
