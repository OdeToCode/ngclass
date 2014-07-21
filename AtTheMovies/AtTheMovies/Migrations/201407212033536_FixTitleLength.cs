namespace AtTheMovies.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FixTitleLength : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Movies", "Title", c => c.String(maxLength: 255));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Movies", "Title", c => c.String());
        }
    }
}
