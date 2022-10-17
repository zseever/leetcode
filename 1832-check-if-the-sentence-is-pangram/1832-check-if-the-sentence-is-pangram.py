class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        for letter in sentence:
            if letter in alphabet:
                alphabet.remove(letter)
        pangram_check = True if len(alphabet) == 0 else False
        return pangram_check