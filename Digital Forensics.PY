import hashlib

def md5_hash(file_path):
    md5 = hashlib.md5()
    with open(file_path, 'rb') as file:
        while True:
            data = file.read(4096)
            if not data:
                break
            md5.update(data)
    return md5.hexdigest()

print(md5_hash('example.txt'))