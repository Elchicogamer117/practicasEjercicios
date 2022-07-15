class Card extends Payment{
    Integer numberCard;
    String dateCard;
    Integer cvv;

    public Card(Integer id, Integer numberCard, String dateCard, Integer cvv){
        super(id);
        this.numberCard = numberCard;
        this.dateCard = dateCard;
        this.cvv = cvv;
    }
}
