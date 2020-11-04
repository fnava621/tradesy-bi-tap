class Airplane:
    def __init__(self, type):
        print("A new instance got made!")
        self.type = type

    def fly(self):
        if self.type == "Boeing 747":
            print("Flying like boss")
        elif self.type == "Cessna":
            print("Flying like an eagle!!")
        else:
            print("I'm flying")


boeing_747 = Airplane('Boeing 747')
boeing_747.fly()

cessna = Airplane('Cessna')
cessna.fly()
