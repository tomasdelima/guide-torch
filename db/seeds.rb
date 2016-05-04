def random_word
  vowels = 'aaaeeioou'.split ''
  consonants = 'bbbcccdddffgghjjlllmmmmmnnppqrrrsssttvxz'.split ''
  (1..rand(5)).reduce('') do |memo|
    memo += consonants.sample + vowels.sample
  end
end

def random_text
  (1..rand(80)+20).map{random_word}.join(' ').squish
end

def create_users
  10.times do |u|
    User.create(name: "Usuário #{u}", email: "usuario.#{u}@email.com", password: '12345678')
  end
end

def create_authors
  5.times do |a|
    author = Author.create(name: "Autor #{a}")
  end
end

def create_documents
  (rand(100)+100).times do |d|
    global = rand > 0.5
    Document.create(
      title: "Documento #{Document.count} - #{global ? 'global' : 'pessoal'}",
      author: Author.all.sample,
      body: random_text,
      tags: "",
      owner_id: User.all.sample._id.to_s,
      global: global
    )
  end
end

Author.destroy_all
Document.destroy_all

create_authors
create_documents
