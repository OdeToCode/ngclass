namespace AtTheMovies.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddConcurrencyChecks : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Movies", "Version", c => c.Binary(nullable: false, fixedLength: true, timestamp: true, storeType: "rowversion"));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Movies", "Version");
        }
    }
}
