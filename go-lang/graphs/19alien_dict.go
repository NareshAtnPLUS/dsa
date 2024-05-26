package graphs

import (
	"fmt"
	"strings"
)

const ALIEN_DICT_IMPOSSIBLE_ORDER = ""
const ALIEN_DICT_ORDER_NOT_POSSIBLE = false
const ALIEN_DICT_ORDER_POSSIBLE = true

func AlienOrder(words []string) string {
	alienDictionaryDependency := make(map[rune]map[rune]bool)
	thereIsNoDependency := make(map[rune]bool)
	visited := make(map[rune]bool)
	alienDictOrder := make([]rune, 0)
	allChars := make(map[rune]bool)

	// Initialize the maps with all characters
	for _, word := range words {
		for _, char := range word {
			if _, exists := alienDictionaryDependency[char]; !exists {
				alienDictionaryDependency[char] = make(map[rune]bool)
			}
			allChars[char] = true
		}
	}

	for idx, word := range words[1:] {
		prev, curr := words[idx], word
		minLen := min(len(prev), len(curr))

		// Handle the invalid case where prev is longer than curr but they share the same prefix
		if len(prev) > len(curr) && strings.HasPrefix(prev, curr) {
			return ALIEN_DICT_IMPOSSIBLE_ORDER
		}

		for jdx := 0; jdx < minLen; jdx++ {
			src := rune(prev[jdx])
			dst := rune(curr[jdx])
			if src != dst {

				// initialize the maps if they are not there
				if _, exists := alienDictionaryDependency[src]; !exists {
					alienDictionaryDependency[src] = make(map[rune]bool)

				}
				alienDictionaryDependency[src][dst] = true
				// if !alienDictionaryDependency[src][dst] {

				// }
				break
			}
		}
	}

	for node := range allChars {
		if !canBuildAlienDictOrder(node, &alienDictionaryDependency, &visited, &thereIsNoDependency, &alienDictOrder) {
			return ALIEN_DICT_IMPOSSIBLE_ORDER
		}
	}

	fmt.Println(reverseString(alienDictOrder))
	return reverseString(alienDictOrder)
}
func canBuildAlienDictOrder(node rune, alienDictionaryDependency *map[rune]map[rune]bool, visited *map[rune]bool, thereIsNoDependency *map[rune]bool, alienDictOrder *[]rune) bool {

	if (*visited)[node] {
		return ALIEN_DICT_ORDER_NOT_POSSIBLE
	}
	if (*thereIsNoDependency)[node] {
		return ALIEN_DICT_ORDER_POSSIBLE
	}
	(*visited)[node] = true

	for neighbour := range (*alienDictionaryDependency)[node] {
		if !canBuildAlienDictOrder(neighbour, alienDictionaryDependency, visited, thereIsNoDependency, alienDictOrder) {
			return ALIEN_DICT_ORDER_NOT_POSSIBLE
		}
	}
	delete(*visited, node)
	(*thereIsNoDependency)[node] = true
	(*alienDictOrder) = append((*alienDictOrder), node)
	return ALIEN_DICT_ORDER_POSSIBLE
}

func reverseString(runes []rune) string {
	var sb strings.Builder

	for idx := len(runes) - 1; idx > -1; idx-- {
		sb.WriteRune(runes[idx])
	}
	return sb.String()
}
