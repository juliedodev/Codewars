function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let rna = dna.split('').map(x => x.replace('T', 'U')).join('')
    return rna
}